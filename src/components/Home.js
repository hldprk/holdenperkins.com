

import {MyFooter} from './MyFooter';
import React from 'react';
import Hero from 'react-bulma-components/lib/components/hero';
import Heading from 'react-bulma-components/lib/components/heading';
import 'bulma/css/bulma.css'
import '../index.css'
import Columns from 'react-bulma-components/lib/components/columns';


import {Link} from 'react-router-dom'
import { Projects } from './Projects';
import { AboutMe } from './AboutMe';

export class Home extends React.Component {

    render() {


        return <body>
                    
                    <Hero size='medium'>
                        <Hero.Body>
                            
                                <Columns>
                                    <Columns.Column></Columns.Column>
                            
                                    <Columns.Column size='two-fifths'>
                            
                                        <Link to='/home'><Heading className='code has-text-link is-family-monospace' size={2}>Holden Perkins </Heading></Link>
                                        
                                        <Heading subtitle className='code pt-4'>
                                            Reach out to me on <Link to='/github'>GitHub</Link>, <Link to='/linkedin'>LinkedIn</Link>, or at <Link to={() => window.location.replace('mailto:hldprk@gmail.com')}>hldprk@gmail.com</Link>.
                                        </Heading>
                                        
                                    </Columns.Column>
                            
                                    <Columns.Column></Columns.Column>
                            
                                </Columns>

                                <AboutMe/>

                                <Projects/>

                        </Hero.Body>
                    </Hero>
                    
                    <MyFooter/>

                </body>


    }

}