import React, { Component } from 'react'
import jQuery from "jquery"
import $ from "jquery"
class BTT extends Component {

    componentDidMount() {
        $(document).ready(function () {
            const progressPath = document.querySelector(".progress-wrap path");
            const pathLength = progressPath.getTotalLength();

            progressPath.style.transition = progressPath.style.WebkitTransition = "none";
            progressPath.style.strokeDasharray = pathLength + " " + pathLength;
            progressPath.style.strokeDashoffset = pathLength;
            progressPath.getBoundingClientRect();
            progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";

            const updateProgress = function () {
                const scroll = $(window).scrollTop();
                const height = $(document).height() - $(window).height();
                const progress = pathLength - (scroll * pathLength / height);
                progressPath.style.strokeDashoffset = progress;
            }

            updateProgress();
            $(window).scroll(updateProgress);

            let offset = 50;
            let duration = 50;

            $(window).on('scroll', function () {
                if (jQuery(this).scrollTop() > offset) {
                    jQuery('.progress-wrap').addClass('active-progress');
                } else {
                    jQuery('.progress-wrap').removeClass('active-progress');
                }
            });	

            jQuery(".progress-wrap").on("click", function (event) {
                event.preventDefault();
                jQuery("html, body").animate({ scrollTop: (0, 0) }, duration);
                return false;
            })
        });
    }

    render() {
        return (
            <div className="progress-wrap" >
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
        )
    }
}

export default BTT;