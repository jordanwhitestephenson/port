const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const ObjectID = require("mongodb").ObjectID;
// Load Validation
var path = require("path");
const validateProfileInput = require("../../validation/profile");
const validateExperienceInput = require("../../validation/experience");
const validateProjectInput = require("../../validation/project");
// Load Profile Model
const Profile = require("../../models/Profile");
// Load User Model
const User = require("../../models/User");

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Profile Works" }));
// router.use("/static", express.static("public"));
// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
	"/",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const errors = {};
		console.log(req.body, "***************GET");
		Profile.findOne({ user: req.user.id })
			.populate("user", ["name", "avatar"])
			.then((profile) => {
				if (!profile) {
					errors.noprofile = "There is no profile for this user";
					return res.status(404).json(errors);
				}
				res.json(profile);
			})
			.catch((err) => res.status(404).json(err));
	}
);

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get("/all", (req, res) => {
	const errors = {};

	Profile.find()
		.populate("user", ["name", "avatar"])
		.then((profiles) => {
			if (!profiles) {
				errors.noprofile = "There are no profiles";
				return res.status(404).json(errors);
			}

			res.json(profiles);
		})
		.catch((err) => res.status(404).json({ profile: "There are no profiles" }));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public

router.get("/handle/:handle", (req, res) => {
	const errors = {};

	Profile.findOne({ handle: req.params.handle })
		.populate("user", ["name", "avatar"])
		.then((profile) => {
			if (!profile) {
				errors.noprofile = "There is no profile for this user";
				res.status(404).json(errors);
			}

			res.json(profile);
		})
		.catch((err) => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get("/user/:user_id", (req, res) => {
	const errors = {};

	Profile.findOne({ user: req.params.user_id })
		.populate("user", ["name", "avatar"])
		.then((profile) => {
			if (!profile) {
				errors.noprofile = "There is no profile for this user";
				res.status(404).json(errors);
			}

			res.json(profile);
		})
		.catch((err) =>
			res.status(404).json({ profile: "There is no profile for this user" })
		);
});

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post(
	"/",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const { errors, isValid } = validateProfileInput(req.body);

		// Check Validation
		if (!isValid) {
			// Return any errors with 400 status
			return res.status(400).json(errors);
		}

		// Get fields
		const profileFields = {};
		profileFields.user = req.user.id;
		if (req.body.handle) profileFields.handle = req.body.handle;
		if (req.body.status) profileFields.status = req.body.status;

		Profile.findOne({ user: req.user.id }).then((profile) => {
			if (profile) {
				// Update
				Profile.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: profileFields },
					{ new: true }
				).then((profile) => res.json(profile));
			} else {
				// Create

				// Check if handle exists
				Profile.findOne({ handle: profileFields.handle }).then((profile) => {
					if (profile) {
						errors.handle = "That handle already exists";
						res.status(400).json(errors);
					}

					// Save Profile
					new Profile(profileFields)
						.save()
						.then((profile) => res.json(profile));
				});
			}
		});
	}
);

// ****ADD MODULE TO PROJECT***
// /api/profile/projects/module
// @route   POST MODULES

router.post(
	"/project/:project_id",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		console.log(req.body, "ERROR OBEJCT*********");
		const { errors_object, isValid } = validateProjectInput(req.body);

		if (!isValid) {
			return res.status(400).json(errors_object);
		}

		var ModuleData = "";
		if (req.body.type === "ProductGrid") {
			ModuleData = {
				headline: req.body.headline,
				paragraphText: req.body.paragraphText,
				location: req.body.location,
				type: req.body.type,
				layout: req.body.layout,
				button: req.body.button,
				imageSets: req.body.imageSets,
				headlineSize: req.body.headlineSize
			};
		}
		if (req.body.type === "Jumbotron") {
			ModuleData = {
				main_image: {
					SRC: req.body.main_image.SRC,
					link: req.body.main_image.link,
					alt: req.body.main_image.alt,
					title: req.body.main_image.title
				},
				headline: req.body.headline,
				headlineSize: req.body.headlineSize,
				paragraphText: req.body.paragraphText,
				location: req.body.location,
				type: req.body.type,
				button: req.body.button,
				buttonInfo: {
					text: req.body.buttonInfo.text,
					link: req.body.buttonInfo.link
				},
				layout: req.body.layout,
				backgroundColor: req.body.backgroundColor,
				textColor: req.body.textColor,
				projectID: req.params.project_id,
				textBoxBackground: req.body.textBoxBackground
			};
		}
		if (req.body.type === "Gallery") {
			ModuleData = {
				type: req.body.type,
				location: req.body.location,
				imageSets: req.body.imageSets,
				projectID: req.params.project_id
			};
		}
		if (req.body.type === "Two_Stories") {
			ModuleData = {
				type: req.body.type,
				location: req.body.location,
				stories: req.body.stories,
				projectID: req.params.project_id
			};
		}
		if (req.body.type === "Three_Stories") {
			ModuleData = {
				type: req.body.type,
				location: req.body.location,
				stories: req.body.stories,
				projectID: req.params.project_id
			};
		}
		if (req.body.type === "USG") {
			ModuleData = {
				type: req.body.type,
				location: req.body.location,
				projectID: req.params.project_id
			};
		}
		if (req.body.type === "Story_Headline") {
			ModuleData = {
				storyInfo: req.body.storyInfo,
				type: req.body.type,
				location: req.body.location,
				projectID: req.params.project_id
			};
		}
		if (req.body.type === "Email_Social") {
			ModuleData = {
				type: req.body.type,
				location: req.body.location,
				projectID: req.params.project_id
			};
		}

		Profile.findOne({ user: req.user.id }).then((profile) => {
			const projectID = req.params.project_id;
			if (profile) {
				const sectionType = req.body.location;

				Profile.find({ projects: { $elemMatch: { _id: projectID } } })
					.then(function(result) {
						var filteredArray;
						result.forEach(function(projects) {
							let selectedProject = projects.projects.filter(
								(project) => project._id == projectID
							)[0];
							if (selectedProject.modules.length > 0) {
								return (filteredArray = selectedProject.modules.filter(
									(duplicate) => duplicate.location !== ModuleData.location
								));
							}
							return filteredArray;
						});

						if (filteredArray) {
							Profile.update(
								{ projects: { $elemMatch: { _id: projectID } } },
								{ $set: { ["projects.$.modules"]: filteredArray } }
							)
								.then((result) =>
									Profile.findOneAndUpdate(
										{ projects: { $elemMatch: { _id: projectID } } },
										{ $push: { ["projects.$.modules"]: ModuleData } },
										{ new: true }
									)
								)
								.then(profile.save())
								.then((profile) =>
									res.send(
										profile.projects.filter(
											(project) => project._id == projectID
										)[0]
									)
								)
								.catch((err) => console.log(err));
						} else {
							Profile.findOneAndUpdate(
								{ projects: { $elemMatch: { _id: projectID } } },
								{ $push: { ["projects.$.modules"]: ModuleData } },
								{ new: true }
							)
								.then(profile.save())
								.then((profile) =>
									res.send(
										profile.projects.filter(
											(project) => project._id == projectID
										)[0]
									)
								)
								.catch((err) => console.log(err));
						}
					})

					.catch((err) => console.log(err));
			}
		});
	}
);
var CSS = "<script type";
router.get("/get-css", function(req, res) {
	var file = res.sendFile(
		path.join(
			__dirname +
				"../../client/src/components/common/preview_templates/preview_components/templateBuilder.css"
		)
	);
	console.log("is this even getting,", file);
	res.json(file);
});

router.post(
	"/project",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const { errorsObject, isValid } = validateProjectInput(req.body);
		console.log(req.body, "FROM POST PROJECT IN ROUTER");
		// Check Validation
		if (!isValid) {
			// Return any errors with 400 status
			return res.status(400).json(errors);
		}

		Profile.findOne({ user: req.user.id }).then((profile) => {
			const newProject = {
				title: req.body.title,
				heading: req.body.heading,
				icon: req.body.icon,
				openingParagraph: req.body.openingParagraph,
				description: req.body.description,
				modules: []
			};

			// Add to exp array
			profile.projects.unshift(newProject);

			profile.save().then((profile) => res.json(profile));
		});
	}
);

//FETCH CURRENT PROJECT DATA//
router.get(
	"/project/:projectID",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const projectID = req.params.projectID;

		Profile.findOne({ user: req.user.id }).then((profile) => {
			if (profile) {
				// Update
				Profile.findOne({ projects: { $elemMatch: { _id: projectID } } })
					.then(function(project) {
						var fillteredProject = project.projects.filter(
							(project) => project._id == projectID
						);
						return res.json(fillteredProject);
					})
					.catch((err) => console.log(err));
			}
		});
	}
);

//UPDATE PROJECT
router.post(
	"/updateProject/:id",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const newProject = {};
		console.log(req.body.location);
		const projectID = req.params.id;
		var ModuleData = "";
		if (req.body.type === "ProductGrid") {
			ModuleData = {
				headline: req.body.headline,
				paragraphText: req.body.paragraphText,
				location: req.body.location,
				type: req.body.type,
				button: req.body.button,
				imageSets: req.body.imageSets,
				main_image: req.body.main_image
			};
		}
		if (req.body.type === "Jumbotron") {
			ModuleData = {
				headline: req.body.headline,
				paragraphText: req.body.paragraphText,
				main_image_SRC: req.body.main_image.SRC,
				main_image_link: req.body.main_image.link,
				location: req.body.location,
				type: req.body.type,
				button: req.body.button,
				buttonInfo: {
					text: req.body.buttonInfo.text,
					link: req.body.buttonInfo.link
				},
				layout: req.body.layout,
				backgroundColor: req.body.backgroundColor,
				projectID: req.params.project_id,
				textBoxBackground: req.params.textBoxBackground
			};
		}

		Profile.find({ projects: { $elemMatch: { _id: projectID } } }).then(
			function(result) {
				var filteredArray;
				result.forEach(function(u) {
					u.projects.map(
						(e) =>
							(filteredArray = e.modules.filter(
								(location) => location.location !== ModuleData.location
							))
					);
					console.log(filteredArray, "FILTERS***ARE");
					return filteredArray;
				});
				Profile.update(
					{ projects: { $elemMatch: { _id: projectID } } },
					{ $set: { ["projects.$.modules"]: filteredArray } }
				)
					.then((result) =>
						Profile.update(
							{ projects: { $elemMatch: { _id: projectID } } },
							{ $push: { ["projects.$.modules"]: ModuleData } }
						).catch((err) => console.log(err))
					)
					.catch((err) => console.log(err));
			}
		);
	}
);

//GET PREVIEW OF PROJECT
router.get(
	"/preview-project/:id",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const newProject = {};
		const projectID = req.params.id;
		// newProject.user = req.user.id;
		if (req.body.description) newProject.description = req.body.description;
		if (req.body.openingParagraph)
			newProject.openingParagraph = req.body.openingParagraph;
		if (req.body.title) newProject.title = req.body.title;
		if (req.body.icon) newProject.icon = req.body.icon;

		Profile.findOne({ user: req.user.id }).then((profile) => {
			if (profile) {
				// Update
				Profile.update(
					{ projects: { $elemMatch: { _id: projectID } } },
					{
						$set: {
							"projects.$.title": newProject.title,
							"projects.$.icon": newProject.icon,
							"projects.$.openingParagraph": newProject.openingParagraph,
							"projects.$.description": newProject.description
						}
					},
					{ new: true }
				)
					.then(profile.save())
					.then((profile) => res.json(profile))
					.catch((err) => console.log(err));
			}
		});
	}
);

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete(
	"/",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Profile.findOneAndRemove({ user: req.user.id }).then(() => {
			User.findOneAndRemove({ _id: req.user.id }).then(() =>
				res.json({ success: true })
			);
		});
	}
);

// DELETE PROJECT
router.delete(
	"/project/:id",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const newProject = {};
		const projectID = req.params.id;
		// newProject.user = req.user.id;
		Profile.findOne({ user: req.user.id }).then((profile) => {
			if (profile) {
				// Update

				Profile.update(
					{ projects: { $elemMatch: { _id: projectID } } },
					{
						$pull: {
							projects: { _id: projectID }
						}
					}
				)
					.then(profile.save())
					.catch((err) => console.log(err))
					.then((profile) => res.json(profile))
					.catch((err) => console.log(err));
			}
		});
	}
);

module.exports = router;
