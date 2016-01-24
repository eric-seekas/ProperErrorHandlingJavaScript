﻿var request = require('supertest');
var app = require('../../app');

describe('Get index', function() {
    it('responds with html', function(done) {
        request(app)
            .get('/')
            .expect('Content-Type', /html/)
            .expect(200, done);
    });
});
