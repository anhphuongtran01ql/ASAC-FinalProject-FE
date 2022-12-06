import "./booking.css";
import HeaderHomePage from "../Homepage/headerHomePage";
import {CheckCircleOutlined} from '@ant-design/icons';
export const BookingSuccess = () => {
    return <>
        <HeaderHomePage/>
        <div className="booking-success-container divider">
            <div className="booking-success-content">
                <CheckCircleOutlined className="img-success"/>
                <div className="notify-conent">
                    <div className="success-title" >Booking Success!</div>
                    <div>
                        Detailed medical examination will be sent through the <b>Email</b> when Supporter aprrove this schedule.
                    </div>
                    <div>Please check your email <b>today</b>.</div>
                </div>
            </div>
        </div>
    </>
}