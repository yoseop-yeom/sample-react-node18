import axios from 'axios';

export const deleteMember = async (id) => {
  try {
    const response = await axios.delete(`/${id}`);
  } catch (error) {
    throw error;
  }
}