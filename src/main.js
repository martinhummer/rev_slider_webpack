
require('../src/assets/vendor/revolution_slider/js/jquery.themepunch.tools.min.js')
require('../src/assets/vendor/revolution_slider/js/jquery.themepunch.revolution.min.js')
require('../src/assets/vendor/revolution_slider/css/settings.css')
require('../src/assets/vendor/revolution_slider/css/layers.css')
require('../src/assets/vendor/revolution_slider/css/navigation.css')

/* https://learn.jquery.com/using-jquery-core/document-ready/ */
jQuery(document).ready(function () {

    /* initialize the slider based on the Slider's ID attribute */
    jQuery('#rev_slider_1').show().revolution({

        /* options are 'auto', 'fullwidth' or 'fullscreen' */
        sliderLayout: 'auto',

        /* basic navigation arrows and bullets */
        navigation: {

            arrows: {
                enable: true,
                style: 'hesperiden',
                hide_onleave: false
            },

            bullets: {
                enable: true,
                style: 'hesperiden',
                hide_onleave: false,
                h_align: 'center',
                v_align: 'bottom',
                h_offset: 0,
                v_offset: 20,
                space: 5
            }
        }
    });
});