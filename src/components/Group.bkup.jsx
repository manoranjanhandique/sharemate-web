import { useState } from "react";

const Group = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);

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
                <th className="px-4 py-2">Created Date</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Settlement Status</th>
                <th className="px-4 py-2">Settlement Date</th>
                <th className="px-4 py-2">Members</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-600 hover:bg-gray-700 transition">
                <td className="px-4 py-2">Group 1</td>
                <td className="px-4 py-2">2024-12-01</td>
                <td className="px-4 py-2 text-green-400">Active</td>
                <td className="px-4 py-2 text-yellow-400">Pending</td>
                <td className="px-4 py-2">N/A</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => setIsManageModalOpen(true)}
                    className="text-blue-400 hover:underline"
                  >
                    View Members
                  </button>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600">
                    Manage
                  </button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Close
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Create Group Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-lg">
            <h2 className="text-xl font-bold mb-4 text-green-400">Create Group</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">Group Name</label>
                <input
                  type="text"
                  className="block w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600"
                  placeholder="Enter group name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Group Details</label>
                <textarea
                  className="block w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600"
                  placeholder="Enter group details"
                  rows={3}
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Add Members</label>
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
            <h2 className="text-xl font-bold mb-4 text-blue-400">Manage Group</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300">Select Group</label>
                <select className="block w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600">
                  <option>Select Active Group</option>
                  <option>Group 1</option>
                  <option>Group 2</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300">Member List</label>
                <textarea
                  className="block w-full p-3 mt-1 bg-gray-700 text-white rounded-md border border-gray-600"
                  placeholder="Member names (view only)"
                  rows={3}
                  readOnly
                ></textarea>
              </div>
              <div className="space-x-2">
                <button className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                  Add Member
                </button>
                <button className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                  Remove Member
                </button>
                <button className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700">
                  Delete Group
                </button>
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                  onClick={() => setIsManageModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Group;
