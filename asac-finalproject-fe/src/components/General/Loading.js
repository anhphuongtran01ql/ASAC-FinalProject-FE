import { Spin } from 'antd';

const Loading = () => {
    return (
        <div style={{ display:'flex', justifyContent:'center', alignItem:'center'}}>
            <Spin tip="Loading..."/>
        </div>
    )
}
export default Loading;
