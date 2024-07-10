import { getInitials } from "../../utils/helper";

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center rounded-full w-12 h-12 bg-slate-100 font-medium text-slate-950">
        {/* start of using getInitials function to create an initials ot of a name */}
        {getInitials("Swasono Adi")}
        {/* end of using getInitials function to create an initials ot of a name */}
      </div>
      <div>
        <p className="text-sm font-medium">Swasono Adi</p>
        <button className="text-sm text-slate-700 underline" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};
export default ProfileInfo;
