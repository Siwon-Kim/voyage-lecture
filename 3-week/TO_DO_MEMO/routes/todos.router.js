const express = require("express");
const router = express.Router();
const Todo = require("../models/todo.js");

router.get("/", (req, res) => {
	res.send("Hi!");
});

router.post("/todos", async (req, res) => {
	const { value } = req.body;
	const maxOrderByUserId = await Todo.findOne({}).sort("-order").exec(); // order를 기준으로 역순으로 조화

	// order를 1씩 올려주는 기능
	const order = maxOrderByUserId ? maxOrderByUserId.order + 1 : 1;

	// save(): instance를 생성하고 row를 추가해준다
	const todo = new Todo({ value, order });
	await todo.save();

	res.send({ todo });
});

router.get("/todos", async (req, res) => {
	const todos = await Todo.find({}).sort("-order").exec();
	res.send({ todos });
});

router.patch('/todos/:todoId', async (req, res) => {
    const {todoId} = req.params;
    const {order} = req.body; // order가 되어야 하는 값이 반환된다
    console.log(order);
    // 1. todoId에 해당하는 할 일이 있는가?
    // 1-1. 없으면 에러 출력
    const currentTodo = await Todo.findById(todoId);
    if(!currentTodo) {
        return res.status(400).json({"errorMessage": "존재하지 않는 할 일 입니다."})
    }

    // 2. order가 존재하는가? - up, down 끝에 위치한 todos 예외 처리
    if(order) {
        const targetTodo = await Todo.findOne({ order }).exec();
        if(targetTodo) {
            targetTodo.order = currentTodo.order;
            await targetTodo.save();
        }
        currentTodo.order = order;
        await currentTodo.save();
    }

    res.send({});
});

module.exports = router;
