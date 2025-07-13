import React from 'react';
import "../App.css"

function Register() {
    return (
        <>
            <form method="post" action="">
                <h4>Registration Form</h4>
                <table border="0" style={{ borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td><label htmlFor="name">Full Name</label></td>
                            <td>
                                <input type="text" name="name" id="name" />
                            </td>
                        </tr>

                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td>
                                <input type="email" name="email" id="email" />
                            </td>
                        </tr>

                        <tr>
                            <td><label htmlFor="phone">Phone</label></td>
                            <td>
                                <input type="phone" name="phone" id="phone" />
                            </td>
                        </tr>

                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td>
                                <input type="password" name="password" id="password" />
                            </td>
                        </tr>

                        <tr>
                            <td><label htmlFor="confirm">Confirm Password</label></td>
                            <td>
                                <input type="password" name="confirm" id="confirm" />
                            </td>
                        </tr>

                        <tr>
                            <td><label htmlFor="profile">Profile Password</label></td>
                            <td>
                                <input type="password" name="profile" id="profile" />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={6} style={{ textAlign: "center" }}>
                                <input type="submit" name="submit" id="submit" value={"Register"} /> <br /><br />
                                <a href="#">Sign In</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default Register;
