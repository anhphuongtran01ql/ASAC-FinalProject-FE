import moment from 'moment';
import {useLocation} from "react-router-dom";
import React from "react";
import insane from "insane";

function GetDates(startDate, daysToAdd) {
    var aryDates = [];

    for (var i = 1; i <= daysToAdd; i++) {
        var currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        let currentDay = currentDate.getDate();
        if (currentDay < 10) {
            currentDay = "0" + currentDay;
        }
        const date = {
            value: moment(currentDate).format("YYYY-MM-DD"),
            label:DayAsString(currentDate.getDay()) + " - " + currentDay + "/" + `${currentDate.getMonth()+1}`
        }
        aryDates.push(date);
    }

    return aryDates;
}

function MonthAsString(monthIndex) {
    var d = new Date();
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    return month[monthIndex];
}

function DayAsString(dayIndex) {
    var weekdays = new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";

    return weekdays[dayIndex];
}

function useQueryParams() {
    const {search} = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Sanitized = ({ html }) => (
    <div
        dangerouslySetInnerHTML={{
            __html: insane(html, {
                allowedTags: [
                    "p",
                    "strong",
                    "em",
                    "a",
                    "b",
                    "i",
                    "span",
                    "div",
                    "br",
                    "u",
                    "img",
                ],
            }),
        }}
    />
);


export  {GetDates, useQueryParams, Sanitized};
