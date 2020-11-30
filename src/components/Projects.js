


import React from 'react';
import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Box from 'react-bulma-components/lib/components/box';
import Tag from 'react-bulma-components/lib/components/tag';

import '../App.scss'

import axios from 'axios';

import shuffle from 'shuffle-array';

const Repository = (props) => 
        
            <Box className='mb-4'>
                <a href={props.url}><Heading subtitle className='has-text-link has-text-centered mb-5 pb-4' size={4}>{props.name}</Heading></a>
                {props.description === null ? <span/> : (<Heading size={5} className='pb-1 has-text-weight-normal'>{`${props.description}`}</Heading>)}
                {props.home_page === null ? <span/> : <Heading size={6} className='has-text-link'><a href={props.home_page}>{props.homepage}</a></Heading>}
                {props.topics.map(topic => <Tag className='is-link is-light'>{topic}</Tag>)}                
            </Box>


export class Projects extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    async componentDidMount() {

        require('dotenv').config();

        try {

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
            ))});

        } catch (error) {

            console.log(error);

        }

    }

    render() {


        return <span>{this.state.repositories} </span>
    
    
    }

}

