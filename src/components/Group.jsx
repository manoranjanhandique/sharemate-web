import { useCallback, useEffect, useState } from "react";
import groupFormValidation from "../utils/groupValidation";
import { createGroup, fetchGroup, updateGroup, fetchClosedGroup } from "../services/groupService";

const Group = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [groupFormData, setGroupFormData] = useState({
    "groupname": "",
    "groupdetail": "",
    "member_email":""
  })
  const [formError, setFormError]= useState({
    "groupname": "",
    "groupdetail": "",
    "member_email":""
  })
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [groups, setGroups] = useState([]);
  const [closedGroups, setClosedGroups] = useState([]);
  const [members, setMembers] = useState([]);
  const [success, setSuccess]=useState()
  const [isUpdate, setIsUpdate]=useState(null)
  // const [isGroupClosed, setIsGroupClosed]=useState(null)

  const handleFromData=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setGroupFormData({...groupFormData, [name]:value});
    setFormError({...formError,[name]:""})
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    setSuccess("");
    const validationErrors = groupFormValidation(groupFormData);
    if (Object.values(validationErrors).length > 0) {
      setSuccess("");
      setFormError(validationErrors);
      return;
    }
    try {
      if (isUpdate) {
        const data= await updateGroup(isUpdate._id, groupFormData);
        if (data) {
          setGroups((prevGroup)=> prevGroup.map((group)=>group._id === isUpdate._id ? {...group, ...data} : group));
          setSuccess("Group updated Successfully.");
          console.log("Group updated successfully");
        }
      }else {
        const data = await createGroup(groupFormData);
        if (data) {
          setGroupFormData({
            groupname: "",
            groupdetail: "",
            member_email: "",
          });
          setGroups((prevGroup)=> prevGroup.map((group)=>group._id === isUpdate._id ? {...group, ...data} : group));
          setSuccess("Group Created Successfully.");
          console.log("Group Created Successfully.");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleOpenModal = useCallback((groupId, members) => {
    setIsManageModalOpen(true);
    setMembers(members);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsManageModalOpen(false);
    setMembers([]);
  }, []);

  const handleCreateModalOpen=(group=null)=>{
    if(group){
      setIsUpdate(group);
      // setIsGroupClosed(group)
      setGroupFormData({
        groupname: group.group_name,
        groupdetail: group.group_detail,
        member_email: group.member_email || "",
      })
    }else{
      setGroupFormData({
        groupname: "",
        groupdetail: "",
        member_email:  "",
      })
    }
    setIsCreateModalOpen(true);
  }

  const fetchGroupData = async ()=>{    
    try {
      const data= await fetchGroup();
      setGroups(data)
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  } 
  const getClosedGroup = async ()=>{
    try {
      const data= await fetchClosedGroup()
      setClosedGroups(data)
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  }

  useEffect(() => {
    fetchGroupData();
    getClosedGroup()
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-green-400">Group Details</h1>
          <button
            onClick={() => handleCreateModalOpen()}
            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition"
          >
            Create Group
          </button>
        </div>

        {/* Group Table */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="overflow-y-auto" style={{ maxHeight: "calc(var(--row-height) * 8 + 1rem)" }}>
            <table className="w-full text-left table-auto">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-2">Group Name</th>
                  <th className="px-4 py-2">Trip Destinations</th>
                  <th className="px-4 py-2">Total Expenses</th>
                  <th className="px-4 py-2">Settlement Status</th>
                  <th className="px-4 py-2">Settlement Date</th>
                  <th className="px-4 py-2">Members</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {groups &&
                  groups.map((group) => (
                    <tr
                      key={group._id}
                      className="border-t border-gray-600 hover:bg-gray-700 transition"
                    >
                      <td className="px-4 py-2">{group.group_name}</td>
                      <td className="px-4 py-2">{group.group_details}</td>
                      <td className="px-4 py-2 text-green-400">💲25000</td>
                      <td className="px-4 py-2 text-yellow-400">Pending</td>
                      <td className="px-4 py-2">N/A</td>
                      <td className="px-4 py-2">
                        <button
                          onClick={() =>
                            handleOpenModal(group._id, group.members)
                          }
                          className="text-blue-400 hover:underline"
                        >
                          View Members
                        </button>
                      </td>
                      <td className="px-4 py-2 text-green-400">
                        {group.status === "active" ? "Active" : "N/A"}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {/* Manage Group Card */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold text-blue-400 mb-4">
              Manage Group
            </h2>
            <div className="space-y-4">
              {/* Example Group 1 */}

              {groups &&
                groups.map((group) => (
                  <div
                    key={group._id}
                    className="bg-gray-700 p-4 rounded-md flex justify-between items-center"
                  >
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {group.group_name}
                      </h3>
                      <p className="text-sm text-gray-400">
                        Created:{" "}
                        {new Date(group.createdAt).toLocaleDateString()}
                      </p>
                      <p className="text-sm text-green-400 italic">
                        *{group.status}
                      </p>
                    </div>
                    <div className="space-x-2">
                      <button
                        onClick={() => {
                          setIsCreateModalOpen(true);
                          handleCreateModalOpen(group);
                        }}
                        className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      >
                        Edit
                      </button>
                      <button onClick={() => {
                          handleCreateModalOpen(group);
                        }} 
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Close Group
                      </button>
                    </div>
                  </div>
                ))}

              {/* Add more groups here */}
            </div>
          </div>

          {/* Close Group Card */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold text-red-400 mb-4">Close Group</h2>
            <div className="space-y-4">
              {/* Example Group 1 */}
              {closedGroups && closedGroups.map((closeGroup)=>(
                <div key={closeGroup._id} className="bg-gray-700 p-4 rounded-md flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{closeGroup.group_name}</h3>
                    <p className="text-sm text-gray-400">
                      Trip Status: Completed
                    </p>
                    <p className="text-sm text-gray-400">Expenses: $500</p>
                    <p className="text-sm text-red-400">{closeGroup.status}</p>
                  </div>
                  <div className="space-x-2">
                    <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                      View Expenses
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                      Delete Group
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Create Group Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-green-400">
            {isUpdate ? 'Edit Group' : 'Create Group'}
            </h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Group Name
                </label>
                <input
                  type="text"
                  name="groupname"
                  value={groupFormData.groupname}
                  onChange={handleFromData}
                  className={`block w-full p-3 mt-1 bg-gray-700 text-white rounded-md border ${
                    formError.groupname ? "border-red-600" : "border-gray-600"
                  }`}
                  placeholder="Enter group name"
                />
                {formError.groupname && (
                  <small className="text-red-500 mt-1" role="alert">
                    {formError.groupname}
                  </small>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Group Details
                </label>
                <textarea
                  className={`block w-full p-3 mt-1 bg-gray-700 text-white rounded-md border ${
                    formError.groupdetail ? "border-red-600" : "border-gray-600"
                  }`}
                  placeholder="Enter group details"
                  rows={3}
                  name="groupdetail"
                  value={groupFormData.groupdetail}
                  onChange={handleFromData}
                />
                {formError.groupdetail && (
                  <small className="text-red-500 mt-1" role="alert">
                    {formError.groupdetail}
                  </small>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Add Members
                </label>
                <input
                  type="text"
                  name="member_email"
                  value={groupFormData.member_email}
                  onChange={handleFromData}
                  className={`block w-full p-3 mt-1 bg-gray-700 text-white rounded-md border ${
                    formError.member_email
                      ? "border-red-600"
                      : "border-gray-600"
                  }`}
                  placeholder="Enter member email"
                />
                {formError.member_email && (
                  <small className="text-red-500 mt-1" role="alert">
                    {formError.member_email}
                  </small>
                )}
              </div>
              {success && (
                <div
                  className="flex items-center bg-green-600 text-white text-sm font-medium px-4 py-2 rounded shadow-md mt-4"
                  role="alert"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{success}</span>
                </div>
              )}

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                  onClick={() => {
                    setIsCreateModalOpen(false);
                    setFormError("");
                    setSuccess("");
                    setIsUpdate(null);
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  {isUpdate ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Manage Group Modal */}
      {isManageModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-blue-400">
              Member List
            </h2>
            <ul className="list-none text-white">
              {members &&
                members.map((member) => (
                  <li
                    key={member?._id}
                    className="flex items-center justify-between py-2 hover:bg-gray-700 px-1 rounded"
                  >
                    {`${member?.userId?.username} - Balance: ${member.balance}`}
                  </li>
                ))}
            </ul>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                onClick={() => {handleCloseModal(); setMembers(null)}}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;
