import React from 'react';
import ReactMarkdown from 'react-markdown'
import { Container } from '@mantine/core'
import AppMarkdown from './markdown/lectures.md';

console.log(AppMarkdown)
const iconSize = 32;
export default function HomePage() {
  return (
    <Container size="xs" padding="xs">
      <h1 style={{ fontSize: 50, fontWeight: 'bold', textAlign: 'center' }}>
        Khiem's landingpage
      </h1>

      I study Computer Science in my Master's Degree at the Technische-Universität Berlin
      <hr />
      <Container padding={'sm'}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" width={iconSize} height={iconSize} ></img>
        <a href="https://github.com/gapsong"> get to the Github profile</a>
      </Container>
      <Container padding={'sm'}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" width={iconSize} height={iconSize} ></img>
        <a href="https://leetcode.com/gapsong/"> get to the Leetcode profile</a>
      </Container>
      <Container padding={'sm'}>
        <img src="https://images.prismic.io/lichess/5cfd2630-2a8f-4fa9-8f78-04c2d9f0e5fe_lichess-box-1024.png" width={iconSize} height={iconSize} ></img>
        <a href="https://lichess.org/@/SoerenDerSoldat85"> get to the Lichess profile</a>
      </Container>

      My courses:
      <a href="https://isis.tu-berlin.de/course/view.php?id=27403">Algorithmic Game Theory (ADM III)</a>
      <br />
      My courses:
      <a href="https://moseskonto.tu-berlin.de/moses/verzeichnis/persoenliche_uebersicht/stundenplan.html?search=true&startdate=2021-10-18&enddate=2021-10-18&semester=67&extended=false&dateforweek=2021-10-18">Schedule</a>
      <ReactMarkdown children={AppMarkdown} />
    </Container>
  );
}
