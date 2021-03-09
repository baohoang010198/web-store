import React from 'react'
import { useHistory } from 'react-router'
import { Button, Result } from 'antd';

function Page403(props) {
    const history = useHistory();
    const onSubmitLoginFrom = ()=>{
        history.push("/login");
    }
    return (
        <>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, you are not authorized to access this page."
                extra={<Button onClick={onSubmitLoginFrom} type="primary">Login to continue</Button>}
            />
        </>
    )
}


export default Page403

