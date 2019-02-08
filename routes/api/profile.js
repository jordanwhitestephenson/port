const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateProfileInput = require('../../validation/profile');
const validateExperienceInput = require('../../validation/experience');
const validateProjectInput = require('../../validation/project');

// Load Profile Model
const Profile = require('../../models/Profile');
// Load User Model
const User = require('../../models/User');

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Profile Works' }));

// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	const errors = {};

	Profile.findOne({ user: req.user.id })
		.populate('user', ['name', 'avatar'])
		.then(profile => {
			if (!profile) {
				errors.noprofile = 'There is no profile for this user';
				return res.status(404).json(errors);
			}
			res.json(profile);
		})
		.catch(err => res.status(404).json(err));
});

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get('/all', (req, res) => {
	const errors = {};

	Profile.find()
		.populate('user', ['name', 'avatar'])
		.then(profiles => {
			if (!profiles) {
				errors.noprofile = 'There are no profiles';
				return res.status(404).json(errors);
			}

			res.json(profiles);
		})
		.catch(err => res.status(404).json({ profile: 'There are no profiles' }));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public

router.get('/handle/:handle', (req, res) => {
	const errors = {};

	Profile.findOne({ handle: req.params.handle })
		.populate('user', ['name', 'avatar'])
		.then(profile => {
			if (!profile) {
				errors.noprofile = 'There is no profile for this user';
				res.status(404).json(errors);
			}

			res.json(profile);
		})
		.catch(err => res.status(404).json(err));
});

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get('/user/:user_id', (req, res) => {
	const errors = {};

	Profile.findOne({ user: req.params.user_id })
		.populate('user', ['name', 'avatar'])
		.then(profile => {
			if (!profile) {
				errors.noprofile = 'There is no profile for this user';
				res.status(404).json(errors);
			}

			res.json(profile);
		})
		.catch(err => res.status(404).json({ profile: 'There is no profile for this user' }));
});

// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
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
	if (req.body.company) profileFields.company = req.body.company;
	if (req.body.website) profileFields.website = req.body.website;
	if (req.body.location) profileFields.location = req.body.location;
	if (req.body.bio) profileFields.bio = req.body.bio;
	if (req.body.status) profileFields.status = req.body.status;
	if (req.body.githubusername) profileFields.githubusername = req.body.githubusername;
	// Skills - Spilt into array
	if (typeof req.body.skills !== 'undefined') {
		profileFields.skills = req.body.skills.split(',');
	}

	// Social
	profileFields.social = {};
	if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
	if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
	if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
	if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;
	if (req.body.instagram) profileFields.social.instagram = req.body.instagram;

	Profile.findOne({ user: req.user.id }).then(profile => {
		if (profile) {
			// Update
			Profile.findOneAndUpdate({ user: req.user.id }, { $set: profileFields }, { new: true }).then(profile =>
				res.json(profile)
			);
		} else {
			// Create

			// Check if handle exists
			Profile.findOne({ handle: profileFields.handle }).then(profile => {
				if (profile) {
					errors.handle = 'That handle already exists';
					res.status(400).json(errors);
				}

				// Save Profile
				new Profile(profileFields).save().then(profile => res.json(profile));
			});
		}
	});
});

// @route   POST api/profile/experience
// @desc    Add experience to profile
// @access  Private
router.post('/experience', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateExperienceInput(req.body);

	// Check Validation
	if (!isValid) {
		// Return any errors with 400 status
		return res.status(400).json(errors);
	}

	Profile.findOne({ user: req.user.id }).then(profile => {
		const newExp = {
			title: req.body.title,
			company: req.body.company,
			location: req.body.location,
			from: req.body.from,
			to: req.body.to,
			current: req.body.current,
			description: req.body.description
		};

		// Add to exp array
		profile.experience.unshift(newExp);

		profile.save().then(profile => res.json(profile));
	});
});

// ****ADD MODULE TO PROJECT***
// /api/profile/projects/module
// @route   POST MODULES

// outer.post('/experience', passport.authenticate('jwt', { session: false }), (req, res) => {
router.post('/project/:project_id', passport.authenticate('jwt', { session: false }), (req, res) => {
	console.log(req.body);
	var ModuleData = '';
	if (req.body.type === 'ProductGrid') {
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
	if (req.body.type === 'Jumbotron') {
		ModuleData = {
			headline: req.body.headline,
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
			projectID: req.params.project_id
		};
	}

	Profile.findOne({ user: req.user.id }).then(profile => {
		const projectID = req.params.project_id;
		if (profile) {
			var obj = {};
			const sectionType = req.body.location;
			obj[sectionType] = ModuleData;
			Profile.update(
				{ projects: { $elemMatch: { _id: projectID, modules: { $elemMatch: { location: sectionType } } } } },
				{
					$addToSet: {
						['projects.$.modules']: ModuleData
					}
				},
				{ upsert: true }
			)
				.then(function(project) {
					if (project === null) {
						Profile.update(
							{ projects: { $elemMatch: { _id: projectID } } },
							{
								$addToSet: {
									['projects.$.modules']: ModuleData
								}
							},
							{ upsert: true }
						)
							.then(function(project) {
								console.log('this is project end', project);
							})
							.catch(err => console.log(err, 'from null project'));
					}
				})
				.catch(err =>
					Profile.update(
						{ projects: { $elemMatch: { _id: projectID } } },
						{
							$addToSet: {
								['projects.$.modules']: { ModuleData: { $each: [ModuleData.headline] } }
							}
						},
						{ upsert: true }
					)
				);

			// .then(profile.save())
			// .then(profile => res.json(profile))
			// .catch(err => console.log(err));
		}
	});
});
//***THIS IS A SUCCESS** */

// @route   DELETE api/profile/experience/:exp_id5%5C227%5C342%5C371%5C367%5C201%5C206
// @desc    Delete experience from profile
// @access  Private
router.delete('/experience/:exp_id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Profile.findOne({ user: req.user.id })
		.then(profile => {
			// Get remove index
			const removeIndex = profile.experience.map(item => item.id).indexOf(req.params.exp_id);

			// Splice out of array
			profile.experience.splice(removeIndex, 1);

			// Save
			profile.save().then(profile => res.json(profile));
		})
		.catch(err => res.status(404).json(err));
});

// @route   DELETE api/profile/education/:edu_id
// @desc    Delete education from profile
// @access  Private
router.delete('/education/:edu_id', passport.authenticate('jwt', { session: false }), (req, res) => {
	Profile.findOne({ user: req.user.id })
		.then(profile => {
			// Get remove index
			const removeIndex = profile.education.map(item => item.id).indexOf(req.params.edu_id);

			// Splice out of array
			profile.education.splice(removeIndex, 1);

			// Save
			profile.save().then(profile => res.json(profile));
		})
		.catch(err => res.status(404).json(err));
});

router.post('/project', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateProjectInput(req.body);

	// Check Validation
	if (!isValid) {
		// Return any errors with 400 status
		return res.status(400).json(errors);
	}

	Profile.findOne({ user: req.user.id }).then(profile => {
		const newProject = {
			title: req.body.title,
			heading: req.body.heading,
			openingParagraph: req.body.openingParagraph,
			description: req.body.description,
			modules: []
		};

		// Add to exp array
		profile.projects.unshift(newProject);

		profile.save().then(profile => res.json(profile));
	});
});

//FETCH CURRENT PROJECT DATA//
router.get('/project/:projectID', passport.authenticate('jwt', { session: false }), (req, res) => {
	const projectID = req.params.projectID;

	Profile.findOne({ user: req.user.id }).then(profile => {
		if (profile) {
			// Update
			Profile.findOne({ projects: { $elemMatch: { _id: projectID } } })
				.then(project => res.json(project))
				.catch(err => console.log(err));
		}
	});
});

//UPDATE PROJECT
router.put('/updateProject/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	const newProject = {};
	const projectID = req.params.id;
	if (req.body.description) newProject.description = req.body.description;
	if (req.body.openingParagraph) newProject.openingParagraph = req.body.openingParagraph;
	if (req.body.title) newProject.title = req.body.title;

	Profile.findOne({ user: req.user.id }).then(profile => {
		if (profile) {
			// Update
			Profile.update(
				{ projects: { $elemMatch: { _id: projectID } } },
				{
					$set: {
						'projects.$.title': newProject.title,
						'projects.$.openingParagraph': newProject.openingParagraph,
						'projects.$.description': newProject.description
					}
				},
				{ new: true }
			)
				.then(profile.save())
				.then(profile => res.json(profile))
				.catch(err => console.log(err));
		}
	});
});

//GET PREVIEW OF PROJECT
router.get('/preview-project/:id', passport.authenticate('jwt', { session: false }), (req, res) => {
	// const { errors, isValid } = validateProjectInput(req.body);
	const newProject = {};
	const projectID = req.params.id;
	// newProject.user = req.user.id;
	if (req.body.description) newProject.description = req.body.description;
	if (req.body.openingParagraph) newProject.openingParagraph = req.body.openingParagraph;
	if (req.body.title) newProject.title = req.body.title;

	Profile.findOne({ user: req.user.id }).then(profile => {
		if (profile) {
			// Update
			Profile.update(
				{ projects: { $elemMatch: { _id: projectID } } },
				{
					$set: {
						'projects.$.title': newProject.title,
						'projects.$.openingParagraph': newProject.openingParagraph,
						'projects.$.description': newProject.description
					}
				},
				{ new: true }
			)
				.then(profile.save())
				.then(profile => res.json(profile))
				.catch(err => console.log(err));
		}
	});
});

// @route   DELETE api/profile
// @desc    Delete user and profile
// @access  Private
router.delete('/', passport.authenticate('jwt', { session: false }), (req, res) => {
	Profile.findOneAndRemove({ user: req.user.id }).then(() => {
		User.findOneAndRemove({ _id: req.user.id }).then(() => res.json({ success: true }));
	});
});

module.exports = router;
