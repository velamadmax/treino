import React from 'react'

const WorkspaceLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="flex w-full h-screen">
      <div className="flex h-full w-16 flex-col items-center bg-secondary">
        
      </div>
      {children}
    </div>
  )
}

export default WorkspaceLayout
