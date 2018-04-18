export interface Location {
    mapLocation?: {
        address?: string;
        country?: string;
        city?: string;
        state?: string;
        longitude?: number;
        latitude?: number;
        postcode?: string;
    };
    userLocation?: {
        address?: string;
        country?: string;
        city?: string;
        state?: string;
        longitude?: number;
        latitude?: number;
        postcode?: string;
        isValid?: boolean;
    }
    isMapAddress?: boolean;
}