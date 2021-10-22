


import React from 'react';
import {Heading, Box, Tag} from 'react-bulma-components'
import '../App.css'
import { Octokit } from '@octokit/rest';

const Repository = (props) => 
        
            <Box className='mb-4'>
                <a href={props.url}><Heading subtitle className='has-text-link has-text-centered mb-5 pb-4' size={4}>{props.name}</Heading></a>
                {props.description === null ? <span/> : (<Heading size={5} className='pb-1 has-text-weight-normal'>{`${props.description}`}</Heading>)}
                {props.home_page === null ? <span/> : <Heading size={6} className='has-text-link'><a href={props.home_page}>{props.homepage}</a></Heading>}
            </Box>


export class Projects extends React.Component {

    constructor(props) {

        super(props);

        this.state = {repositories:[]};

    }

    async componentDidMount() {
        
        try {

            const octokit = new Octokit({});

			const result = await octokit.repos.listForUser({username:'hldprk'});
			const repos = result.data;

			let new_repositories = [];

			for(let n = 0; n < repos.length; n++) {

				let repository = repos[n];

				new_repositories.push(
					<Repository
						key={n}
						name={repository.name} 
						description={repository.description} 
						language={repository.language}
						topics={repository.topics}    
						url={repository.html_url}
						homepage={repository.homepage}
                	/>
				);

			}

            this.setState({ repositories: new_repositories});

			console.log(this.state.repoitories)


        } catch (error) {

            console.log(error);

        }

    }

    render() {

        return <span>{this.state.repositories} </span>
    
    }

}

