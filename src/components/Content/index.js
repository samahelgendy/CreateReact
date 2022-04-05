import React , {Component} from 'react';
import About from '../About/index';
import Home from '../Home/index';
import Portfilo from '../Portfilo/index';
import Profile from '../Profile/index';
import SocialMedia from '../SocialMedia/index';
import Work from '../Work/index';
import Footer from '../Footer/index';



class Content extends Component{
    render(){
        return(
            <div>
                  < Home />
                < Work />
                <Portfilo />
                  < Profile/>
                  < About />
                   < SocialMedia/>
                   < Footer/>

            </div>
        )
    }
}
export default Content;