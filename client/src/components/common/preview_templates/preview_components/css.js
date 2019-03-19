const myCSS = `



.flex_box_default_no_wrap {
    display: flex;
    justify-content: center;
}

.error_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* margin: auto; */
}

.preview_container .flex_box_default {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.flex_box_space_around {
    display: flex;
    justify-content: flex-end;
    flex-wrap: wrap;
    align-items: baseline;
    align-content: space-around;
}

.flex_box_column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.preview_container h2, .preview_container .cta_text {
    margin-bottom: 5px;
}

.preview_container .cta_text {
    color: #444;
    text-decoration: underline;
}

.preview_container .olapic-carousel-subtitle {
    line-height: 1.3;
}

.preview_container .crocs_story_headline {
    font-size: 2em;
    margin-bottom: 10px;
}

.module_container .padding-crocs-stories {
    padding: 20px 10px 5px 10px;
    margin-top: 10px;
    margin-bottom: 1.5em;
}

.preview_container .fancy-headline {
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    font-weight: bold;
    margin-top: 30px;
    line-height: 1.0;
    width: 100%;
}

.module_margin {
    margin-top: 2em;
    margin-bottom: 2em;
}

.paragraph_text {
    font-size: 15px;
}

.preview_container .footer-email-signup {
    margin-bottom: 5px;
}

.preview_container .padding-crocs-stories {
    padding: 20px 10px 5px 10px;
    margin-top: 10px;
    margin-bottom: 1.5em;
}

.preview_container .fancy-headline:before, .preview_container .fancy-headline:after {
    background-color: #444;
    content: '';
    flex-grow: 1;
    height: 1px;
    position: relative;
    top: 0.5em;
}

.preview_container .fancy-headline:before {
    margin-right: 10px;
}

.preview_container .fancy-headline:after {
    margin-left: 10px;
}

/* .preview_container .flex_box_column {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-content: center;
} */

.preview_container .flex_box_row {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
}

.preview_container .module_two_text_container {
    background: #fff;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 7%;
    padding-bottom: 7%;
}

.preview_container a:hover, .preview_container a:active, .preview_container a:focus {
    text-decoration: none;
}

.preview_container .story_text {
    padding: 25px 20px;
    margin-right: auto;
}

.preview_container .icon {
    margin-left: 8px;
    margin-right: 8px;
}

.preview_container .icons {
    margin-top: 20px;
}

.preview_container h4 {
    font-size: 19px;
}

.preview_container .text_container {
    width: 100%;
}

.preview_container .footer-email-signup input {
    height: 35px;
    width: 80%;
}

.preview_container .submitBtn {
    color: #fff;
    background-color: #444;
}

@media (max-width: 480px) {
    .mobile_image_full_screen {
        width: 100%;
    }
}

.story_image_box-shadow {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    position: relative;
    height: 270px;
    padding: 15px;
    margin-top: 2em;
    margin-bottom: 2em;
}

.preview_container .social_media_container {
    min-height: 150px;
    margin: 10px 5px 10px 5px;
}

.jumbo_image_box-shadow {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    position: relative;
    padding: 15px;
    margin-top: 2em;
    margin-bottom: 2em;
}

.box-shadow {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
}

.story_text {
    margin-top: 10px
}

.preview_container .footer-email-signup button {
    width: 20%;
}

.preview_container p {
    line-height: 1.2
}

.preview_container .gray_container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.preview_container .feedback {
    display: flex;
    justify-content: center;
}
`;

export default myCSS;
