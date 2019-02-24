/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { CloudGatewayTestModule } from '../../../../test.module';
import { ModuleResultDeleteDialogComponent } from 'app/entities/svcUnivCourseModule/module-result/module-result-delete-dialog.component';
import { ModuleResultService } from 'app/entities/svcUnivCourseModule/module-result/module-result.service';

describe('Component Tests', () => {
    describe('ModuleResult Management Delete Component', () => {
        let comp: ModuleResultDeleteDialogComponent;
        let fixture: ComponentFixture<ModuleResultDeleteDialogComponent>;
        let service: ModuleResultService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CloudGatewayTestModule],
                declarations: [ModuleResultDeleteDialogComponent]
            })
                .overrideTemplate(ModuleResultDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ModuleResultDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ModuleResultService);
            mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
            mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
        });

        describe('confirmDelete', () => {
            it('Should call delete service on confirmDelete', inject(
                [],
                fakeAsync(() => {
                    // GIVEN
                    spyOn(service, 'delete').and.returnValue(of({}));

                    // WHEN
                    comp.confirmDelete(123);
                    tick();

                    // THEN
                    expect(service.delete).toHaveBeenCalledWith(123);
                    expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
                    expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
                })
            ));
        });
    });
});