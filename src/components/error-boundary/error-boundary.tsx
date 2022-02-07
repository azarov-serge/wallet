import React, { Component } from 'react';

import { ErrorMessage } from './components/error-message';
import { ErrorBoundaryProps } from '@/components/error-boundary/types';

export class ErrorBoundary extends Component<ErrorBoundaryProps> {
    state = {
        hasError: false,
    };

    componentDidCatch(): void {
        this.setState({
            hasError: true,
        });
    }

    render(): JSX.Element {
        if (this.state.hasError) {
            return <ErrorMessage />;
        }

        return this.props.children;
    }
}
