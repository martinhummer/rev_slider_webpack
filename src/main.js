window.punchgs = window.GreenSockGlobals

import tools from '../src/assets/vendor/revolution_slider/js/jquery.themepunch.tools.min.js'
import slider from '../src/assets/vendor/revolution_slider/js/jquery.themepunch.revolution.min.js'

require('../src/assets/vendor/revolution_slider/js/extensions/revolution.extension.layeranimation.min.js')
require('../src/assets/vendor/revolution_slider/js/extensions/revolution.extension.slideanims.min.js')
require('../src/assets/vendor/revolution_slider/js/extensions/revolution.extension.navigation.min.js')
require('../src/assets/vendor/revolution_slider/js/extensions/revolution.extension.video.min.js')
require('../src/assets/vendor/revolution_slider/js/extensions/revolution.extension.actions.min.js')
require('../src/assets/vendor/revolution_slider/js/extensions/revolution.extension.carousel.min.js')
require('../src/assets/vendor/revolution_slider/js/extensions/revolution.extension.kenburn.min.js')
require('../src/assets/vendor/revolution_slider/js/extensions/revolution.extension.migration.min.js')
require('../src/assets/vendor/revolution_slider/js/extensions/revolution.extension.parallax.min.js')

import '../src/assets/vendor/revolution_slider/css/settings.css'
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
                style:"erinyen",
                enable:true,
                hide_onmobile:true,
                hide_under:600,
                hide_onleave:true,
                hide_delay:200,
                hide_delay_mobile:1200,
                tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div>	<span class="tp-arr-titleholder">{{title}}</span> </div>',
                left: {
                    h_align:"left",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                },
                right: {
                    h_align:"right",
                    v_align:"center",
                    h_offset:30,
                    v_offset:0
                }
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