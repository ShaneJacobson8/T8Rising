import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Help extends Component {
    render() {
        return (
            <text>
                {/* Home page Paragraph 1 Text */}
                <div class="jumbotron jumbotron-fluid" style={{ textAlign: 'left' }}>
                    <div class="container">
                        <h1 align="center">You can help in different ways</h1>
                        <br />
                        <br />
                        <h3 class="display-5">1. Buy a gift</h3>
                        <p class="lead">These gifts are specific items people need. Purchase the item for them here.
                        </p>
                            <button><Link to="/Donate" type="submit" className="btn btn-primary">Donate</Link></button>
                        <br />
                        <h3 class="display-5">2. Donate</h3>
                        <p class="lead">Donations will allow us to allocate the funds to 
</p>
                        <br />
                        <h3 class="display-5">Products</h3>
                        <p class="lead">Data
                        </p>
                    </div>
                </div>
                <br />
                <br />


            </text>
        )
    }
}
export default Help;