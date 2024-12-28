import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";

const Group = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [groups, setGroups] = useState([]);
  const [members, setMembers] = useState([]);

  const handleOpenModal = useCallback((groupId, members) => {
    setIsManageModalOpen(true);
    setMembers(members);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsManageModalOpen(false);
    setMembers([]);
  }, []);

  const fetchGroup = async () => {
    try {
      const response = await axios.get(BASE_URL + "/get-group-list", {
        withCredentials: true,
      });
      setGroups(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGroup();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-green-400">Group Details</h1>
          <button
            onClick={() => setIsCreateModalOpen(true)}
            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition"
          >
            Create Group
          </button>
        </div>

        {/* Group Table */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-4">
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
                        //   () => {
                        //   setIsManageModalOpen(true);
                        //   setMembers(group.members);
                        // }}
                        className="text-blue-400 hover:underline"
                      >
                        View Members
                      </button>
                    </td>
                    <td className="px-4 py-2 text-green-400">{group.status==='active' ? 'Active' : 'N/A'}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          {/* Manage Group Card */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold text-blue-400 mb-4">
              Manage Group
            </h2>
            <div className="space-y-4">
              {/* Example Group 1 */}
              <div className="bg-gray-700 p-4 rounded-md flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-white">Group 1</h3>
                  <p className="text-sm text-gray-400">Created: 2024-12-01</p>
                  <p className="text-sm text-green-400 italic">*Active</p>
                </div>
                <div className="space-x-2">
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Close Group
                  </button>
                </div>
              </div>
              {/* Add more groups here */}
            </div>
          </div>

          {/* Close Group Card */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4">
            <h2 className="text-xl font-bold text-red-400 mb-4">Close Group</h2>
            <div className="space-y-4">
              {/* Example Group 1 */}
              <div className="bg-gray-700 p-4 rounded-md flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-white">Group 1</h3>
                  <p className="text-sm text-gray-400">
                    Trip Status: Completed
                  </p>
                  <p className="text-sm text-gray-400">Expenses: $500</p>
                  <p className="text-sm text-red-400">Closed</p>
                </div>
                <div className="space-x-2">
                  {/* <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Close Group</button> */}
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    View Expenses
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete Group
                  </button>
                </div>
              </div>
              {/* Add more groups here */}
              <div className="bg-gray-700 p-4 rounded-md flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-white">Group 1</h3>
                  <p className="text-sm text-gray-400">
                    Trip Status: Completed
                  </p>
                  <p className="text-sm text-gray-400">Expenses: $500</p>
                  <p className="text-sm text-red-400">Closed</p>
                </div>
                <div className="space-x-2">
                  {/* <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Close Group</button> */}
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    View Expenses
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete Group
                  </button>
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-md flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-white">Group 1</h3>
                  <p className="text-sm text-gray-400">
                    Trip Status: Completed
                  </p>
                  <p className="text-sm text-gray-400">Expenses: $500</p>
                  <p className="text-sm text-red-400">Closed</p>
                </div>
                <div className="space-x-2">
                  {/* <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Close Group</button> */}
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    View Expenses
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete Group
                  </button>
                </div>
              </div>
              <div className="bg-gray-700 p-4 rounded-md flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-white">Group 1</h3>
                  <p className="text-sm text-gray-400">
                    Trip Status: Completed
                  </p>
                  <p className="text-sm text-gray-400">Expenses: $500</p>
                  <p className="text-sm text-red-400">Closed</p>
                </div>
                <div className="space-x-2">
                  {/* <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Close Group</button> */}
                  <button className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    View Expenses
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete Group
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Create Group Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-green-400">
              Create Group
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Group Name
                </label>
                <input
                  type="text"
                  className="block w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600"
                  placeholder="Enter group name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Group Details
                </label>
                <textarea
                  className="block w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600"
                  placeholder="Enter group details"
                  rows={3}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Add Members
                </label>
                <input
                  type="text"
                  className="block w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600"
                  placeholder="Enter member emails (comma-separated)"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                >
                  Create
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
                  onClick={() => handleCloseModal()}
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
