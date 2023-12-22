

import { GrUserAdmin } from 'react-icons/gr'
import { MdOutlineReviews } from "react-icons/md";


import { BsBookmarkPlusFill } from "react-icons/bs";

import MenuItem from '../../MenuItem'
import useRole from '../../../../hooks/useRole';

const UserMenu = () => {
  const [role] = useRole()
  return (
    <>
    
      <MenuItem
        icon={BsBookmarkPlusFill}
        label='Guide Line Tasks '
        address='guideline'
      />
      
        <MenuItem
        icon={MdOutlineReviews}
        label='My Tasks'
        address='myTasks'
      />

      {role === 'user' && (
        <div className='flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform text-gray-600  hover:bg-gray-300   hover:text-gray-700 cursor-pointer'>
          <GrUserAdmin className='w-5 h-5' />

          <span className='mx-4 font-medium'>Become A Host</span>
        </div>
      )}
    </>
  )
}

export default UserMenu;