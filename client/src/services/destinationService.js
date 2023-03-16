import * as request from "./requester";
import { destinationUrl } from '../../constants/constants';

export const getAllDestinations = () => request.get(destinationUrl);

export const getDestinationById = (destinationId) => request.get(`${destinationUrl}/${destinationId}`);

export const createDestination = (destinationData) => request.post(destinationUrl, destinationData);

export const updateDestination = (destinationId, destinationData) => request.put(`${destinationUrl}/${destinationId}`, destinationData);

export const removeDestination = (destinationId) => request.del(`${destinationUrl}/${destinationId}`);
