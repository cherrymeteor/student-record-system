/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { CloudGatewayTestModule } from '../../../../test.module';
import { ModuleGradeDeleteDialogComponent } from 'app/entities/svcProgrammeModule/module-grade/module-grade-delete-dialog.component';
import { ModuleGradeService } from 'app/entities/svcProgrammeModule/module-grade/module-grade.service';

describe('Component Tests', () => {
    describe('ModuleGrade Management Delete Component', () => {
        let comp: ModuleGradeDeleteDialogComponent;
        let fixture: ComponentFixture<ModuleGradeDeleteDialogComponent>;
        let service: ModuleGradeService;
        let mockEventManager: any;
        let mockActiveModal: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [CloudGatewayTestModule],
                declarations: [ModuleGradeDeleteDialogComponent]
            })
                .overrideTemplate(ModuleGradeDeleteDialogComponent, '')
                .compileComponents();
            fixture = TestBed.createComponent(ModuleGradeDeleteDialogComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ModuleGradeService);
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
