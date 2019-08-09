var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = chai.expect;
chai.use(chaiHttp);

const sinon = require('sinon');
var mongoose = require('mongoose');

var app = require('../server');
var User = require('../models/user').user;
var routes = require('../routes/routeCheck.js/route');




describe('Testing Api calls', () => {

    it('test for registerUser function which gives error as a resoponse', function () {
        let req = {
            body: {
                firstName: "ram",
                lastName: "krish",
                userName: "ramu",
                password: "ramu123",
                status: false
            }
        }
        let res = "success";
        let error = "error";
        sinon.stub(User, "findOne").returns(error);
        routes.registerUser(req, res);
        User.findOne.restore();

    });
    it("should create new post", function (done) {
        var TodoMock = sinon.mock(new User({ todo: 'Save new todo from mock' }));
        var todo = TodoMock.object;
        var expectedResult = { status: true };
        TodoMock.expects('save').yields(null, expectedResult);
        todo.save(function (err, result) {
            TodoMock.verify();
            TodoMock.restore();
            expect(result.status).to.be.true;
            done();
        });
    });


    it("should return error, if post not saved", function (done) {
        var TodoMock = sinon.mock(new User({ todo: 'Save new todo from mock' }));
        var todo = TodoMock.object;
        var expectedResult = { status: false };
        TodoMock.expects('save').yields(expectedResult, null);
        todo.save(function (err, result) {
            TodoMock.verify();
            TodoMock.restore();
            expect(err.status).to.not.be.true;
            done();
        });
    });



    it('test for loginUser function which gives error as a resoponse', function () {
        let req = {
            body: {
                userName: "ram",
                password: "ramu123",
            }
        }
        let res = "success";
        let error = "error";
        sinon.stub(User, "findOne").returns(error);
        routes.loginUser(req, res);
        User.findOne.restore();
    });


});