import React from "react";
import "./Home.css";
import { Auth } from 'aws-amplify';
import NavBar from '../components/NavBar';
import { Text } from '@fluentui/react';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { registerIcons } from 'office-ui-fabric-react/lib/Styling';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import Octocat from '../media/octocat.png'
import { initializeIcons } from '@uifabric/icons';
import { mergeStyles, mergeStyleSets } from 'office-ui-fabric-react/lib/Styling';
import { IconButton } from 'office-ui-fabric-react';

initializeIcons();

registerIcons({
  icons: {
    'octocat': 
      (
        <img src={Octocat}/>
      ),
  }
});

const iconClass = mergeStyles({
  fontSize: 50,
  margin: '0 25px',
});

const iconStyle = {
  root: {
    fontSize: '30px'
  }
}
const classNames = mergeStyleSets({
  deepSkyBlue: [{ color: 'deepskyblue' }, iconClass],
  black: [{ color: 'black' }, iconClass],
  salmon: [{ color: 'salmon' }, iconClass],
});

export default function HomePage(props) {

    const RenderWidgets = () => {
        return (
          <div>
            <NavBar/>
            <div className="header">
              <Text variant="mega" style={{color: "darkGray"}}>Hi, my name is <Text variant="mega">Rob</Text></Text>
            </div>
            <Separator>About</Separator>
            <div className="about">
              <Text block>A career in public service has given me unique opportunities to understand, appreciate,</Text>
              <Text block>and overcome challenges in Public Sector IT Operations and Engineering space.</Text>
            </div>
            <Separator>Projects</Separator>
            <div className="Projects">
              <Text block>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </div>
            <Separator>Contact</Separator>
            <div className="Contact">
              <a href='https://github.com/robdnh'><img src={Octocat} className="octocat" href='https://github.com/robdnh'/></a>
              <a href='https://www.linkedin.com/in/rdii-/'>
                <Icon
                  className={classNames.black}
                  iconName='LinkedInLogo'
                />
              </a>
            </div>
          </div>
        );
    }

    return (
        <div class="Home">
            <RenderWidgets />
        </div>
    );
}
