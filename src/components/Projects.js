


import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Box from 'react-bulma-components/lib/components/box';
import Tag from 'react-bulma-components/lib/components/tag';

import 'bulma/css/bulma.css'
import '../index.css'

import axios from 'axios';

import shuffle from 'shuffle-array';

const Repository = (props) => 
        
        <Container className=' mr-5 pl-1 mt-5 mb-5 pt-5 pb-4' style={{marginLeft:2+'em', marginRight:2+'em'}}> 
            <Box>
                <a href={props.url}><Heading subtitle className='has-text-link has-text-centered mb-5' size={4}>{props.name}</Heading></a>
                {props.description === null ? <span/> : (<Heading size={5} className='pb-1 has-text-weight-normal'>{`${props.description}`}</Heading>)}
                {props.home_page === null ? <span/> : <Heading size={6} className='has-text-link'><a href={props.home_page}>{props.homepage}</a></Heading>}
                {props.topics.map(topic => <Tag className='is-link is-light'>{topic}</Tag>)}                
            </Box>
        </Container>;


export class Projects extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    async componentDidMount() {

        require('dotenv').config();
        
        const result = await axios({
            method: "get",
            url: `https://api.github.com/users/hldprk/repos`,
            headers: {

                Authorization: `Bearer ${process.env.REACT_APP_GITHUB_API_KEY}`,
                
                "Content-Type": "application/json",
                
                "Accept": "application/vnd.github.mercy-preview+json" 
            
            }
        });


        this.setState({ repositories: shuffle(result['data'].map(repository => 
            <Repository 
                name={repository.name} 
                description={repository.description} 
                language={repository.language}
                topics={repository.topics}    
                url={repository.html_url}
                homepage={repository.homepage}
            />
        ))})

    }

    render() {


        return <span>{this.state.repositories} </span>
    
    
    }

}

