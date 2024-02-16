import axios from 'axios';

const BASE_URI = '/members/v1'

export const deleteMember = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URI}/${id}`);
  } catch (error) {
    throw error;
  }
}