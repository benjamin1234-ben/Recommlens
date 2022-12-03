import { 
    authenticationQuery, 
    challangeQuery, 
    createProfuileQuery, 
    refreshQuery, 
    searchProfilesQuery, 
    searchPublicationsQuery, 
    urqlClient 
} from "./querys.js";
import path from "path";

export const searchProfiles = async (req, res) => {
    const { query } = req.params;
    console.log(query);

    const response = await urqlClient.query(searchProfilesQuery, { query }).toPromise();

    res.json(response.data.search.items);
    console.log(response.data.search.items);
}

export const searchPublications = async (req, res) => {
    const { query } = req.params;
    console.log(query);

    const response = await urqlClient.query(searchPublicationsQuery, { query }).toPromise();

    res.json(response.data.search.items);
    console.log(response.data.search.items);
}

export const authorization = async (req, res) => {
    const response = await urqlClient.query(challangeQuery).toPromise();

    res.json(response.data.challenge.text);
    console.log(response.data.challenge.text);
}

export const refresh = async (req, res) => {
    const response = await urqlClient.mutation(refreshQuery).toPromise();

    res.json(response.data);
    console.log(response.data);
}

export const authentication = async (req, res) => {
    const body = req.body;
    console.log(body);

    const response = await urqlClient.mutation(authenticationQuery).toPromise();

    res.json(response);
    console.log(response);
}

export const sign = (req, res) => {
    res.sendFile(path.resolve("./public/index.html"));
}

export const create = async (req, res) => {
    const body = req.body;
    console.log(body);

    const response = await urqlClient.mutation(createProfuileQuery, { ...body }).toPromise();

    res.json(response);
    console.log(response);
}