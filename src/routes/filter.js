import express from 'express';

const router = express.Router();

router.post('/htv', (req, res) => {
    const data = req.body;

    const filteredPayload = filterPayload(data.payload);
    res.json({ response: filteredPayload });
});

const filterPayload = (payload) => {
    return payload
    .filter(item => item.type === 'htv')
    .map(item => ({
        concataddress: concatAddress(item.address),
        type: item.type,
        workflow: 'completed',
    }));
};

const concatAddress = (addressJson) => {
    return `${addressJson.buildingNumber} ${addressJson.street}`
        + ` ${addressJson.suburb} ${addressJson.state} ${addressJson.postcode}`;
};

export default router;
