import { State } from '../../utils/types/state-types';
import { useAppSelector } from '../../redux/hook/reducer-hooks';

const UserName = () => {
  const userName = useAppSelector((state:State)=>state.user.userName)
  if(!userName) return null;
    return(<div className=" hidden text-sm font-semibold md:block ">
      <p>{userName}</p>
    </div>
  );
};

export default UserName;
