/* Copyright (c) 2017 Red Hat, Inc. */


function serialize(message) {
    return JSON.stringify([message.msg_type, message]);
}
exports.serialize = serialize;

function FSMTrace(order, fsm_name, from_state, to_state, recv_message_type) {
    this.msg_type = 'FSMTrace';
    this.order = order;
    this.sender = 0;
    this.trace_id = 0;
    this.fsm_name = fsm_name;
    this.from_state = from_state;
    this.to_state = to_state;
    this.recv_message_type = recv_message_type;
}
exports.FSMTrace = FSMTrace;

function ChannelTrace(from_fsm, to_fsm, sent_message_type) {
    this.msg_type = 'ChannelTrace';
    this.sender = 0;
    this.trace_id = 0;
    this.from_fsm = from_fsm;
    this.to_fsm = to_fsm;
    this.sent_message_type = sent_message_type;
}
exports.ChannelTrace = ChannelTrace;
