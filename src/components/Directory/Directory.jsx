import React from 'react'
import { CategoryItem } from '../Category Item/CategoryItem';
import '../Directory/Directory-styles.scss'

export const Directory = ({categories}) => {

  return (
    <div className="directory-container">
      {categories.map(({ title,id,imageUrl }) => (
        <CategoryItem key={id} category={{title,id,imageUrl}} />
      ))}
    </div>
  )
}
