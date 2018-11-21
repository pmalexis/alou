import React, { Component } from 'react';
import './Filter.css';
import $ from "jquery";

export default class Filter extends Component {

    render() {

        let iScrollPos = 0;
        $(window).scroll(function() {
            var iCurScrollPos = $(this).scrollTop();
            if (iCurScrollPos > iScrollPos) {
                if($(window).scrollTop() > 600) {
                    $('.Filter').parent().addClass('scroll');
                }
            } else {
                $('.Filter').parent().removeClass('scroll');
            }
            iScrollPos = iCurScrollPos;

            if($(window).scrollTop() > 600) {
                $('.Filter').parent().addClass('fixed');
            }
            else {
                $('.Filter').parent().removeClass('fixed');
            }
        });

        return(
            <div className={"Filter"}></div>
        )
    }
}