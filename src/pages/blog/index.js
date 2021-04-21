
import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';

//Components
import Layouts from '../../components/Layouts';
import Card from '../../components/blog/card';
import PostList from '../../components/blog/postList';
import PostSlider from '../../components/postSlider/postSlider';

// styles
const ContainerBlog = styled.div`
  margin: auto;
  /* width: 70vw; */
  width: 100%;
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Text = styled.h3`
	font-size:  ${props => props.slider ? '1.875rem' : '2.75rem'};
	font-weight: 700;
	color: #FDE7A9;
	font-family: "usual";
`;

export const query = graphql`
  query  {
    posts: allGraphCmsPost {
      nodes {
        id
        title
        excerpt 
        publishedAt
        tags {
          name
        }
        content {
          html
        }
        cover {
          url
        }
        authors {
          id
          name
          jobTitle
          socialNetworkLink
          bio {
            html
          }
          photo {
            url
          }
        }
      }
    }
  }
`

const renderBlog = (info) => (
  <>
    <Card data={info[0]} />
    <PostSlider data={info} />
  </>
)

const Index = ({ data }) => {
  const infoData = data?.posts?.nodes;
  const isData = !infoData.length;
  return (
    <Layouts>
      <ContainerBlog>
        {isData
          ? <Text>Não há conteúdo no momento</Text>
          : renderBlog(infoData)
        }
      </ContainerBlog>
    </Layouts>

  )
}


export default Index;
