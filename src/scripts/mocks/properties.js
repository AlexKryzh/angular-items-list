import properties from '../../resources/mocks/properties.json';

function PropertiesMocks($httpBackend) {
    'ngInject';

    $httpBackend.whenGET('/properties').respond(properties);

}

export default PropertiesMocks;