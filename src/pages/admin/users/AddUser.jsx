import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Users extends Component {
    render() {
        return (
            <div className="container">
                <div className="flex flex-row">
                    <div className="flex flex-column">
                        <h4>Ajouter un utilisateur</h4>
                    </div>

                </div>
                <div className="flex flex-row">
                    <div className="">
                        <Link to={'/'} className="btn">Retour</Link>
                    </div>
                </div>
                <div className="flex flex-row">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="pseudo">Pseudo</label>
                            <input type="text" name="pseudo" value=""/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Users;