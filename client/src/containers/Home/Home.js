import React, { Component } from 'react';
import { Query } from "react-apollo";
import { GET_USERS } from '../../queries/index'

class Home extends Component {
    render() {
        return (
            <div>
                <Query query={GET_USERS}>
                    {
                        ({data, loading, error}) => {
                            if (loading) return <div>Loading get users...</div>
                            if (error) return <div>Error.</div>
                            return (
                                <div>
                                    <ul>
                                        {
                                            data.users.map(user => (
                                                <li>{user.firstName}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            )
                        }
                    }
                </Query>
            </div>
        )
    }
}

export default Home;
