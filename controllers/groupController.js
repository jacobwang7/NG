const Group = require('../models/Group');
const User = require('../models/User');

// Create a new group
exports.createGroup = async (req, res) => {
  try {
    const { creator, name, description, type } = req.body;
    const group = new Group({
      name,
      description,
      type,
      members: [creator] // Add the creator of the group as a member
    });
    await group.save();
    res.status(201).json({ message: 'Group created successfully', group });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get a single group by ID
exports.getGroupById = async (req, res) => {
  try {
    const group = await Group.findById(req.params.id).populate('members type');
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    res.json(group);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update a group
exports.updateGroup = async (req, res) => {
  try {
    const { name, description, type } = req.body;
    const group = await Group.findByIdAndUpdate(req.params.id, { name, description, type }, { new: true });
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    res.json({ message: 'Group updated successfully', group });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a group
exports.deleteGroup = async (req, res) => {
  try {
    const group = await Group.findByIdAndDelete(req.params.id);
    if (!group) {
      return res.status(404).json({ message: 'Group not found' });
    }
    res.json({ message: 'Group deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

//Add members to a group
exports.addMember = async (req, res) => {
    const groupId = req.params.groupId;
    const userId = req.params.userId;

    try {
        // Check if the group exists
        const group = await Group.findById(groupId);
        if (!group) {
        return res.status(404).json({ message: 'Group not found' });
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        // Check if the user is already a member of the group
        if (group.members.includes(userId)) {
        return res.status(400).json({ message: 'User is already a member of the group' });
        }

        // Add the user to the group
        group.members.push(userId);
        await group.save();

        res.json({ message: 'User added to group successfully', group });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};

//Remove members from a group
exports.removeMember = async (req, res) => {
    const groupId = req.params.groupId;
    const userId = req.params.userId;

    try {
        // Check if the group exists
        const group = await Group.findById(groupId);
        if (!group) {
        return res.status(404).json({ message: 'Group not found' });
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
        return res.status(404).json({ message: 'User not found' });
        }

        // Check if the user is a member of the group
        if (!group.members.includes(userId)) {
        return res.status(400).json({ message: 'User is not a member of the group' });
        }

        // Remove the user from the group
        group.members = group.members.filter(memberId => memberId.toString() !== userId);
        await group.save();

        res.json({ message: 'User removed from group successfully', group });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
};