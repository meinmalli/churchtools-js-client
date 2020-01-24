import { oldApi, get, post, put, deleteApi, getAllPages } from './churchtoolsClient';

const login = (username, password, rememberMe = true) => {
    return post('/login', {
        username: username,
        password: password,
        rememberMe
    });
};

const totp = (code, personId) => {
    return post('/login/totp', {
        code,
        personId
    });
};

const masterdata = module => {
    return oldApi(module + '/ajax', 'getMasterdata');
};

const whoami = (loginstring = null, personId = null) => {
    if (loginstring) {
        return get(`/whoami?loginstr=${loginstring}&id=${personId}&no_url_rewrite=true`);
    }
    return get('/whoami');
};

const personEvents = personId => {
    return get(`/persons/${personId}/events`);
};

const logout = () => {
    return oldApi('login/ajax', 'logout');
};

const logintoken = personId => {
    return get(`/persons/${personId}/logintoken`);
};

const person = personId => {
    return get(`/persons/${personId}`);
};

const group = groupId => {
    return get(`/groups/${groupId}`);
};

const members = groupId => {
    return getAllPages(`/groups/${groupId}/members`);
};

const services = () => {
    return get('/services');
};
const serviceGroups = () => {
    return get('/servicegroups');
};

const search = (query, domainTypes = []) => {
    let queryString = `/search?query=${query}`;
    domainTypes.forEach(domainType => {
        queryString += `&domainTypes[]=${domainType}`;
    });
    return get(queryString);
};

const persons = (personIds, limit = 10) => {
    if (personIds.length === 0) {
        return [];
    }
    let queryString = '/persons?';
    const queryParams = personIds
        .map(personId => {
            return 'ids[]=' + personId;
        })
        .join('&');
    return get(queryString + queryParams + '&limit=' + limit);
};

const getAllByIds = (baseQuery, result, remainingIds, resolve, reject) => {
    const resultsPerCall = 100;
    const ids = remainingIds.slice(0, resultsPerCall - 1);
    let queryString = baseQuery + '?';
    const queryParams = ids
        .map(id => {
            return 'ids[]=' + id;
        })
        .join('&');
    get(queryString + queryParams + '&limit=' + resultsPerCall)
        .then(resultFromApi  => {
            result = result.concat(resultFromApi);
            const remaining = remainingIds.slice(resultsPerCall);
            if (remaining.length > 0) {
                getAllByIds(baseQuery, result, remaining, resolve, reject);
            } else {
                resolve(result);
            }
        })
        .catch(reject);

};

const groupsAll = groupIds => {
    if (groupIds === null || groupIds === undefined) {
        return getAllPages('/groups');
    }
    return new Promise((resolve, reject) => {
        getAllByIds(
            '/groups',
            [],
            groupIds,
            groups => {
                resolve(groups);
            },
            error => reject(error)
        );
    });
};

const personsAll = personIds => {
    return new Promise((resolve, reject) => {
        getAllByIds(
            '/persons',
            [],
            personIds,
            persons => {
                resolve(persons);
            },
            error => reject(error)
        );
    });
};

const searchPersons = query => {
    return search(query, ['person']);
};

const acceptServiceRequest = (personId, serviceRequestId, comment = null) => {
    const body = {
        agreed: true
    };
    if (comment) {
        body.comment = comment;
    }
    return put(`/persons/${personId}/servicerequests/${serviceRequestId}`, body);
};

const declineServiceRequest = (personId, serviceRequestId, comment = null) => {
    if (comment) {
        return deleteApi(`/persons/${personId}/servicerequests/${serviceRequestId}`, {
            comment
        });
    }
    return deleteApi(`/persons/${personId}/servicerequests/${serviceRequestId}`);
};

const undoServiceRequest = (personId, serviceRequestId) => {
    return post(`/persons/${personId}/servicerequests/${serviceRequestId}/undo`);
};

const sendDeviceId = (userId, token, type) => {
    return put('/persons/' + userId + '/devices/' + token, {
        type
    });
};

const deleteDeviceId = (userId, token) => {
    return deleteApi('/persons/' + userId + '/devices/' + token);
};

const agenda = eventId => {
    return get(`/events/${eventId}/agenda`);
};

const personMasterData = () => {
    return get('/masterdata/person');
};

const installationInfos = () => {
    return get('/info');
};

const personTags = personId => {
    return get('/persons/' + personId + '/tags');
};

const personRelationships = personId => {
    return get('/persons/' + personId + '/relationships');
};

const statuses = () => {
    return get('/statuses');
};

const campuses = () => {
    return get('/campuses');
};

const config = () => {
    return get('/config');
};

const groupsForPerson = personId => {
    return get(`/persons/${personId}/groups`);
};

const getFilteredGroups = (
    isPublic,
    isOpenForMembers,
    campusIds,
    ageGroupId,
    groupTypeIds,
    limit) => {
    let query = '';
    if (typeof isPublic === 'boolean') {
        query += `&is_public=${isPublic}`;
    }
    if (typeof isOpenForMembers === 'boolean') {
        query += `&is_open_for_members=${isOpenForMembers}`;
    }
    if (campusIds && campusIds.length) {
        query += campusIds.map(id => `&campus_ids[]=${id}`).join('');
    }
    if (typeof ageGroupId === 'number') {
        query += `&agegroup_id=${ageGroupId}`;
    }
    if (groupTypeIds && groupTypeIds.length) {
        query += groupTypeIds.map(id => `&group_type_ids[]=${id}`).join('');
    }
    if (typeof limit === 'number' && limit != Infinity) {
        query += `&limit=${limit}`;
    }
    if (query.length === 0) {
        return [];
    }
    // remove leading '&'
    query = query.slice(1);
    if (limit === Infinity) {
        return getAllPages(`/groups?${query}`);
    }
    return get(`/groups?${query}`);
};

export {
    login,
    totp,
    logout,
    whoami,
    personEvents,
    masterdata,
    logintoken,
    person,
    services,
    serviceGroups,
    acceptServiceRequest,
    declineServiceRequest,
    search,
    searchPersons,
    persons,
    personsAll,
    sendDeviceId,
    undoServiceRequest,
    deleteDeviceId,
    agenda,
    members,
    group,
    personMasterData,
    installationInfos,
    personTags,
    personRelationships,
    statuses,
    campuses,
    groupsAll,
    config,
    groupsForPerson,
    getFilteredGroups
};

getFilteredGroups(undefined,
    true,
    [1],
    1,
    [1,4],
    Infinity);