import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";

import { Header } from "../components/header/header";
import { Card } from "../components/cards/card";

type TData = {
  data: {
    contentfulMyResume: {
      resume: {
        title: string;
        url: string;
      };
    };
    allContentfulCard: {
      edges: [
        {
          node: {
            header: string;
            id: string;
            image: {
              url: string;
            };
            text: {
              text: string;
            };
          };
        }
      ];
    };
    contentfulProfilePic: {
      profilepic: {
        url: string;
      };
    };
  };
};

const IndexPage = ({ data }: TData) => {
  console.log(data);

  const {
    contentfulMyResume: { resume },
    allContentfulCard: { edges },
    contentfulProfilePic: {
      profilepic: { url },
    },
  } = data;

  return (
    <>
      <div className="h-[100vh] w-[40%] bg-[#ECE3D9] absolute shadow-2xl"></div>
      <main className="flex flex-col items-center justify-center relative z-10 p-[20px]">
        <Header img={url} resume={resume} />
        <section className="flex flex-col items-center gap-5">
          {edges.length > 0
            ? edges.map(({ node: { header, id, image, text } }) => {
                return (
                  <Card key={id} header={header} image={image} text={text} />
                );
              })
            : ""}
        </section>
      </main>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>My Answers</title>;

export const query = graphql`
  {
    contentfulProfilePic {
      id
      profilepic {
        url
      }
    }
    contentfulMyResume {
      resume {
        id
        url
        description
        title
      }
    }
    allContentfulCard {
      edges {
        node {
          id
          header
          image {
            url
          }
          text {
            text
          }
        }
      }
    }
  }
`;
