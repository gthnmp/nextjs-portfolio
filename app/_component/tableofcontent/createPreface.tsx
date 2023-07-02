import React from 'react';
import Preface from './Preface';

export function createPreface(data:any) {
  const preface = data.preface;

  return (
    <Preface
      name={preface.name}
      title={preface.title}
      summary={preface.summary} 
    />
  );
}
