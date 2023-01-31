import React, { useState } from 'react';
import mongoose from 'mongoose';

const MyComponent = () => {
    const [param1, setParam1] = useState('');
    const [param2, setParam2] = useState('');

    const saveToMongo = async (param1, param2) => {
        try {
            await mongoose.createConnection('mongodb+srv://Webel:webel123@cluster0.rq2oytr.mongodb.net/?retryWrites=true&w=majority', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });

            const schema = new mongoose.Schema({
                param1: String,
                param2: String
            });

            const MyModel = mongoose.model('MyModel', schema);
            const data = new MyModel({ param1, param2 });

            await data.save();

            console.log('Data saved successfully!');
        } catch (error) {
            console.error(error);
        } 
        // finally {
        //     mongoose.connection.close();
        // }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await saveToMongo(param1, param2);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Param 1:
                <input type="text" value={param1} onChange={e => setParam1(e.target.value)} />
            </label>
            <label>
                Param 2:
                <input type="text" value={param2} onChange={e => setParam2(e.target.value)} />
            </label>
            <button type="submit">Save</button>
        </form>
    );
};

export default MyComponent;
