import React from 'react';
import User from '../../components/User';
import { withRouter } from 'next/router';

const authIndexPage = withRouter((props) => (
    <div>
        <h1>The Auth Index Page -  {props.appName}</h1>
        <p>Came from {props.router.query.clicked}</p>
        <User name="Antarpreet" age={22}/>
    </div>
));

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Super App (Auth)'});
        }, 1000);
    });
    return promise;
}

export default authIndexPage;