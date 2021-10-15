import React from 'react';
import { Container } from '@mantine/core';

const iconSize = 32;
export default function HomePage() {
  return (
    <div className="center">
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
      </Container>

    </div>

  );
}
