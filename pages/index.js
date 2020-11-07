import React, {Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/layout';
import { Link } from '../routes';


class CampaignIndex extends Component {
    /**static is a property asign directly to the class, not the instances
     * of the class. we want to access to initial props without rendering
     * CampaignIndex
     */
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns };/**we can now reference our component 
        with property "campaigns" */
    }

    renderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>{/**dynamic routing */}
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid : true
            };
        });
        return <Card.Group items={items} />
    }
    
    
    /**componentDidmount es totally apropiate for regular react apps.
     * but it is not suitable for using next.js, because next render 
     * the code in the server side, and that's why we need to fetch data 
     * and load data to global variables WITHOUT rendering our code, cause
     * rendering is high computational expending process.
     */
    // async componentDidMount() {
    //     const campaigns = await factory.methods.getDeployedCampaigns().call();
    //     console.log(campaigns);
    // };
    render () {
        //return <div>{this.props.campaigns[0]}</div>;
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Link route="/campaigns/new">
                        <a>{/** anchor tag is what's giving us the actual traditional
                         *  right click functionality where we can right click
                         *  the link and say something like open a new tab
                         *  or what have you*/}
                            <Button
                                floated="right"
                                content="Create Campaign"
                                icon="add circle"
                                primary
                            />
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
    }
    
}

export default CampaignIndex;

// export default () => {
//     return <h1>keslokes mi tiooooo</h1>;
// };
