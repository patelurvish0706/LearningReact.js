import React from 'react'

function Login() {
    return (
        <>
            <form method="post" action="">
                <h4>Login Form</h4>
                <table border="0" style={{ borderCollapse: "collapse" }}>
                    <tbody>
                        <tr>
                            <td><label htmlFor="email">Email</label></td>
                            <td>
                                <input type="email" name="email" id="email" />
                            </td>
                        </tr>

                        <tr>
                            <td><label htmlFor="password">Password</label></td>
                            <td>
                                <input type="password" name="password" id="password" />
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
                                <input type="submit" name="submit" id="submit" value={"Login"} /> <br /><br />
                                <a href="#">Register Here</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </>
    )
}

export default Login
