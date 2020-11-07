import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
    return (
        <Menu style={{marginTop: '10px'}}>
            {/*<Menu.Item>CrowdCoin</Menu.Item>*/}
            <Link route="/">
                <a className="item">CrowdCoin</a>{/**<a> anchor tag */}
            </Link>
            <Menu.Menu position="right">
                {/*<Menu.Item>Campaigns</Menu.Item>
                <Menu.Item>+</Menu.Item>*/}
                <Link route="/">
                    <a className="item">Campaigns</a>{/**<a> anchor tag */}
                </Link>
                <Link route="/campaigns/new">
                    <a className="item">+</a>{/**<a> anchor tag */}
                </Link>



            </Menu.Menu>

        </Menu>
    )
}